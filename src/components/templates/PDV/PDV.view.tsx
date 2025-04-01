import { Header } from "@/components/organisms/header";
import { Main } from "./main.view";
import { db } from "@/lib/dexie";
import { BottomNavigation } from "@/components/organisms/bottom-navigation/bottom-navigation.view";


type Props = {
    name: string
    age: number
}
async function addFriend(props:Props) {
    const {name, age} = props
    try {
      // Add the new friend!
      const id = await db.friends.add({
        name,
        age
      });

    } catch (error) {
      console.error("error", error)
    }
  }

export function PDV() {
    return (
        <div className="bg-[#f6f8fa]">
            <Header pageName="PDV"/>
            <Main/>
            <BottomNavigation/>
        </div>
    )
}
