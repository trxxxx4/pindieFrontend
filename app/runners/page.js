'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList"; // удалить
import { CardsListSection } from "../components/CardsList/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
        {/* Используем CardsListSection вместо CardsList */}
      {newGames ? <CardsListSection id="runner" title="Раннеры" data={newGames} /> : <Preloader />}
    </main>
  );
} 