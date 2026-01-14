"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    phone: z.string().min(10, {
        message: "Informe um número de celular válido.",
    }),
    email: z.string().email({
        message: "Informe um e-mail válido.",
    }),
    subject: z.string().min(5, {
        message: "O assunto deve ter pelo menos 5 caracteres.",
    }),
})

interface RequestQuoteDrawerProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    children?: React.ReactNode
    defaultSubject?: string
}

export function RequestQuoteDrawer({
    isOpen,
    onOpenChange,
    children,
    defaultSubject = "",
}: RequestQuoteDrawerProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            subject: defaultSubject,
        },
    })

    // Update default subject if it changes
    React.useEffect(() => {
        if (defaultSubject) {
            form.setValue("subject", defaultSubject)
        }
    }, [defaultSubject, form])

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        toast.success("Orçamento solicitado com sucesso! Entraremos em contato em breve.")
        onOpenChange(false)
        form.reset()
    }

    return (
        <Drawer open={isOpen} onOpenChange={onOpenChange}>
            {children && <DrawerTrigger asChild>{children}</DrawerTrigger>}
            <DrawerContent>
                <div className="mx-auto w-full max-w-md">
                    <DrawerHeader>
                        <DrawerTitle className="text-2xl font-bold">Solicitar Orçamento</DrawerTitle>
                        <DrawerDescription>
                            Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome Completo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Seu nome" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Número de Celular</FormLabel>
                                            <FormControl>
                                                <Input placeholder="(11) 99999-9999" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input placeholder="seu@email.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Assunto</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Descreva sua necessidade (ex: Aluguel de Escavadeira por 30 dias)"
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <DrawerFooter className="px-0 pt-4">
                                    <Button type="submit" size="lg" className="w-full">
                                        Enviar Solicitação
                                    </Button>
                                    <DrawerClose asChild>
                                        <Button variant="outline" className="w-full">Cancelar</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </form>
                        </Form>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
