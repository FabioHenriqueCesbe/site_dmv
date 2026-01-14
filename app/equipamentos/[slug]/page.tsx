"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, Construction, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RequestQuoteDrawer } from "@/components/RequestQuoteDrawer"
import { equipmentList } from "@/lib/equipment-data"

interface EquipmentPageProps {
    params: {
        slug: string
    }
}

export default function EquipmentPage({ params }: EquipmentPageProps) {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    const equipment = equipmentList.find((item) => item.slug === params.slug)

    if (!equipment) {
        notFound() // This will show the 404 page
        // For static export, we might need a different approach, but for dev/dynamic this is fine.
        // If notFound() isn't working as expected in client component in this next version, we can just return null or custom UI.
        return <div className="p-10 text-center">Equipamento não encontrado.</div>
    }

    const navigateToWhatsapp = () => {
        window.open("https://wa.me/5541991453060", "_blank")
    }

    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            {/* Navbar - Simplified for inner pages or reused */}
            <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60">
                <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8 mx-auto">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl uppercase tracking-tighter">
                        <Image src="/logooficial.png" alt="ITAÚNA" width={100} height={100} />
                        <span className="hidden sm:inline">Itaúna - Locação</span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="h-4 w-4" /> Voltar para o início
                        </Link>
                        <Button onClick={() => setIsDrawerOpen(true)} className="hidden sm:flex bg-[#305294] hover:bg-[#203a6b]">Solicitar Orçamento</Button>
                    </nav>
                </div>
            </header>

            <main className="flex-1 pt-24 pb-20">
                <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Image/Visual */}
                        <div className="relative aspect-video lg:aspect-4/3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center border border-border/50">
                            {/* Ideally we would have real images. For now using the icon in a nice way */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#305294]/5 to-[#305294]/20" />
                            <equipment.icon className="h-32 w-32 md:h-48 md:w-48 text-[#305294] opacity-80" />
                        </div>

                        {/* Right Column: Details */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold border-transparent bg-[#305294]/10 text-[#305294] mb-4">
                                    Disponível para Locação
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                                    {equipment.title}
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {equipment.description}
                                </p>

                                {/* Especificações Técnicas */}
                                {equipment.specs && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-border/50">
                                            <p className="text-sm text-muted-foreground font-medium mb-1">Peso Operacional</p>
                                            <p className="font-semibold text-foreground">{equipment.specs.weight}</p>
                                        </div>
                                        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-border/50">
                                            <p className="text-sm text-muted-foreground font-medium mb-1">Dimensões</p>
                                            <p className="font-semibold text-foreground">{equipment.specs.dimensions}</p>
                                        </div>
                                        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-border/50">
                                            <p className="text-sm text-muted-foreground font-medium mb-1">Função Principal</p>
                                            <p className="font-semibold text-foreground">{equipment.specs.function}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-border/50">
                                <h3 className="font-semibold text-lg mb-4">Por que alugar este equipamento?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#305294] shrink-0 mt-0.5" />
                                        <span>Equipamentos modernos e revisados</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#305294] shrink-0 mt-0.5" />
                                        <span>Suporte técnico especializado</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#305294] shrink-0 mt-0.5" />
                                        <span>Disponibilidade imediata para obras urgentes</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                <Button size="lg" className="h-14 flex-1 text-lg font-semibold bg-[#305294] hover:bg-[#203a6b]" onClick={() => setIsDrawerOpen(true)}>
                                    Solicitar Orçamento
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 flex-1 text-lg font-semibold" onClick={navigateToWhatsapp}>
                                    <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" /> Dúvidas?
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-[#003853] text-zinc-400 py-12 border-t border-[#003853]">
                <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
                    <div>
                        <div className="flex items-center gap-2 font-bold text-white text-lg uppercase tracking-tighter mb-4">
                            <Construction className="h-5 w-5" />
                            <span>Site DMV</span>
                        </div>
                        <p className="max-w-xs">
                            Soluções completas em locação de equipamentos pesados para todo o Brasil.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-4">Contato</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (41) 99145-3060</li>
                            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> dmvcontrole@cesbe.com.br</li>
                            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Curitiba, PR</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-4">Links Úteis</h3>
                        <ul className="flex flex-col gap-2">
                            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/* Reused Quote Drawer */}
            <RequestQuoteDrawer
                isOpen={isDrawerOpen}
                onOpenChange={setIsDrawerOpen}
                defaultSubject={`Orçamento: ${equipment.title}`}
            />
        </div>
    )
}
