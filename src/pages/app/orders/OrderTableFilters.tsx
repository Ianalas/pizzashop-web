import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import { z } from "zod";

const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

type OrderFilterSchema = z.infer<typeof orderFilterSchema>;

export function OrderTableFilters(){
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status');

  const {register, handleSubmit, control, reset} = useForm<OrderFilterSchema>({
    resolver: zodResolver(orderFilterSchema),
    defaultValues: {
      orderId: orderId ?? '',
      customerName: customerName ?? "",
      status: status ?? "all",
    }
  })

  function handleFilter({orderId, customerName, status}: OrderFilterSchema){
    setSearchParams( state => {
      if(orderId){
        state.set('orderId', orderId);
      } else{
        state.delete('orderId');
      }

      if(customerName){
        state.set('customerName', customerName);
      } else{
        state.delete('customerName');
      }

      if(status){
        state.set('status', status);
      } else{
        state.delete('status');
      }

      state.set('page', '1');

      return state;
    })
  }

  function handleClearFilters(){
    setSearchParams( state =>{

      state.delete('orderId');
      state.delete('customerName');
      state.delete('status');

      state.set('page', '1');
      

      return state;
    })

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    });
  }

  return(
    <form className="flex items-center gap-2" onSubmit={handleSubmit(handleFilter)}>
      <span className="text-sm font-semibold">Filtros</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" {...register("orderId")}/>
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" {...register("customerName")}/>
      <Controller 
        name="status" 
        control={control} 
        render={({field: {name, onChange, value, disabled}}) =>{
          return(
            <Select defaultValue="all" name={name} onValueChange={onChange} value={value} disabled={disabled}>
              <SelectTrigger className="h-8 w-44">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos Status</SelectItem>
                <SelectItem value="pending">Pendendte</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      />

      <Button type="submit" variant="secondary" size="sm">
        <Search className="h-4 w-4 mr-2"/>
        Filtrar resultados
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={handleClearFilters}>
        <X className="h-4 w-4 mr-2"/>
        Remover filtros
      </Button>
    </form>
  )
}