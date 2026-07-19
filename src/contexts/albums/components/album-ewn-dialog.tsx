import { DialogClose } from "@radix-ui/react-dialog";
import Button from "../../../components/button";
import { Dialog, DialogBody, DialogContent, DialogFooter, DialogTrigger } from "../../../components/dialog";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import ImagePreview from "../../../components/image-preview";
import Skeleton from "../../../components/skeleton";
import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
import type { Photo } from "../../photos/models/photo";

interface AlbumNewDialogProps {
    trigger: React.ReactNode;
}

export default function AlbumNewDialog({
    trigger
}: AlbumNewDialogProps) {
    const isLoadingPhotos = false;
    const photos: Photo[] = [
    {
      id: "123",
      title: "Olá mundo!",
      imageId: "portrait-tower.png",
      albums: [
        { id: "3421", title: "Album 1" },
        { id: "123", title: "Album 2" },
        { id: "456", title: "Album 3" },
      ],
    },
    {
      id: "321",
      title: "Olá mundo!",
      imageId: "portrait-tower.png",
      albums: [
        { id: "3421", title: "Album 1" },
        { id: "123", title: "Album 2" },
        { id: "456", title: "Album 3" },
      ],
    },
  ];
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogBody className="flex flex-col gap-5">
                    <InputText placeholder="Adicione um titulo" />
                    <div className="space-y-3">
                        <Text as="div" variant="label-small">
                            Fotos Cadastradas
                        </Text>
                        {!isLoadingPhotos && photos.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                { photos.map((photo)=> (
                                    <ImagePreview
                                        key={photo.id}
                                        src={`/images/${photo.imageId}`}
                                        title={photo.title}
                                        className="w-20 h-20 rounded"
                                    />
                                ))}
                            </div>
                        )}

                        {isLoadingPhotos && (
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton
                                    key={`photo-loading-${index}`}
                                    className="w-20 h-20 rounded"
                                />
                                ))}
                            </div>
                        )}

                        {!isLoadingPhotos && photos.length === 0 && (
                            <div className="w-full flex flex-col justify-center items-center gap-3">
                                <SelectCheckboxIllustration />
                                <Text variant="paragraph-medium" className="text-center">
                                Nenhuma foto disponível para seleção
                                </Text>
                            </div>
                        )}
                    </div>
                </DialogBody>
                <DialogFooter>
                    <DialogClose>
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>                    
                    <Button>Criar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}