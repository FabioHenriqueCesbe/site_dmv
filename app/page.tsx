"use client"

import * as React from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { RequestQuoteDrawer } from "@/components/RequestQuoteDrawer"
import { EquipmentModal } from "@/components/EquipmentModal"
import { MessageCircle, Menu, Phone, Mail, MapPin, Construction, ChevronRight, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { equipmentList } from "@/lib/equipment-data"

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [selectedEquipment, setSelectedEquipment] = React.useState<typeof equipmentList[0] | null>(null)
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = React.useState(false)

  const navigateToWhatsapp = () => {
    // Replace with actual number
    window.open("https://wa.me/5541991453060", "_blank")
  }

  const handleEquipmentClick = (equipment: typeof equipmentList[0]) => {
    setSelectedEquipment(equipment)
    setIsEquipmentModalOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8 mx-auto">
          <div className="flex items-center gap-2 font-bold text-xl uppercase tracking-tighter">
            <Image src="/logooficial.png" alt="ITAÚNA" width={100} height={100} />
            <span>ITAÚNA - LOCAÇÃO DE EQUIPAMENTOS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-primary">Sobre Nós</a>
            <a href="#equipment" className="transition-colors hover:text-primary">Equipamentos</a>
            <Button onClick={() => setIsDrawerOpen(true)} className="bg-[#305294] hover:bg-[#203a6b]">Solicitar Orçamento</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-[#003853] text-white overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-linear-to-r from-[#003853]/80 to-transparent z-10" />
          <div className="absolute inset-0 z-0">
            {/* Use a simple CSS pattern or gradient if image fails, but ideally an image */}
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#003853] via-[#3a568c] to-[#203a6b] animate-in fade-in zoom-in duration-1000" />
          </div>

          <div className="container relative z-20 px-4 md:px-8 flex flex-col items-start gap-6 max-w-screen-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-3xl">
              Aluguel de Máquinas para sua Obra
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
              Frota moderna de escavadeiras, tratores e equipamentos de grande porte.
              Segurança, manutenção em dia e suporte completo para o seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-[#305294] hover:bg-[#203a6b]" onClick={() => setIsDrawerOpen(true)}>
                Solicitar Orçamento <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold text-black bg-white hover:bg-zinc-200 border-none" onClick={navigateToWhatsapp}>
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section id="equipment" className="py-20 bg-background">
          <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#305294]/10 text-[#305294] mb-4">
                Nossa Frota
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Equipamentos Disponíveis
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
                Confira nossa linha completa de equipamentos para locação. Selecione o equipamento desejado para saber mais.
              </p>
            </div>

            <div className="w-full max-w-5xl mx-auto px-4 lg:px-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {equipmentList.map((item) => (
                    <CarouselItem key={item.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div
                        onClick={() => handleEquipmentClick(item)}
                        className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg hover:-translate-y-1 block h-full cursor-pointer"
                      >
                        <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative overflow-hidden p-6">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-xl mb-2 group-hover:text-[#305294] transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center text-[#305294] font-medium text-sm mt-4">
                            Ver detalhes <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="-left-12 border-[#305294] text-[#305294] hover:bg-[#305294] hover:text-white" />
                  <CarouselNext className="-right-12 border-[#305294] text-[#305294] hover:bg-[#305294] hover:text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950">
          <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="relative h-[300px] md:h-[400px] w-full max-w-lg mx-auto bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Gemini_Generated_Image_oorxu4oorxu4oorx.png"
                  alt="Sobre Nós"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#305294] text-white hover:bg-[#305294]/80">
                  Sobre Nós
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                  Experiência e Confiança no Mercado de Locação
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com anos de atuação no mercado, somos especialistas no fornecimento de equipamentos
                  pesados para construção civil, mineração e infraestrutura. Nossa missão é oferecer
                  soluções que garantam produtividade e segurança para sua obra.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <li className="flex items-center gap-2 font-medium">
                    <div className="h-2 w-2 rounded-full bg-[#305294]" />
                    Frota sempre renovada
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="h-2 w-2 rounded-full bg-[#305294]" />
                    Manutenção preventiva rigorosa
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="h-2 w-2 rounded-full bg-[#305294]" />
                    Atendimento ágil e personalizado
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="h-2 w-2 rounded-full bg-[#305294]" />
                    Operadores qualificados (opcional)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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

      {/* WhatsApp Floating Button */}
      <button
        onClick={navigateToWhatsapp}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </button>

      {/* Drawer Form */}
      <RequestQuoteDrawer isOpen={isDrawerOpen} onOpenChange={setIsDrawerOpen} />

      {/* Equipment Modal */}
      <EquipmentModal
        isOpen={isEquipmentModalOpen}
        onOpenChange={setIsEquipmentModalOpen}
        equipment={selectedEquipment}
      />
    </div>
  )
}
