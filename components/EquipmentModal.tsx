"use client"

import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { equipmentList } from "@/lib/equipment-data"
import Image from "next/image"

interface EquipmentModalProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    equipment: typeof equipmentList[0] | null
}

export function EquipmentModal({
    isOpen,
    onOpenChange,
    equipment,
}: EquipmentModalProps) {
    if (!equipment) return null

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] overflow-hidden p-0 gap-0">
                <DialogHeader className="p-6 pb-2">
                    <div className="w-full aspect-video relative mb-4 rounded-lg overflow-hidden bg-muted/20">
                        <Image
                            src={equipment.image}
                            alt={equipment.title}
                            fill
                            className="object-contain" // Use object-contain to avoid cutting off parts of the machine
                        />
                    </div>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                        {equipment.title}
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                        {equipment.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="px-6 py-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Especificações Técnicas</h4>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <span className="font-medium">Peso Operacional</span>
                            <span className="col-span-2 text-muted-foreground">{equipment.specs.weight}</span>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-3 items-center gap-4">
                            <span className="font-medium">Dimensões</span>
                            <span className="col-span-2 text-muted-foreground">{equipment.specs.dimensions}</span>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-3 items-start gap-4">
                            <span className="font-medium pt-1">Função Principal</span>
                            <span className="col-span-2 text-muted-foreground">{equipment.specs.function}</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-muted/50 flex justify-end">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                        Fechar
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
