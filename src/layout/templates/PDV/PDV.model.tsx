import { db } from "@/lib/dexie"

// função que adiciona e ler

// 

type Props = {
    name: string
    age: number
}

export async function addFriend(props:Props) {
    const {name, age} = props
    try {
        // Add the new friend!
        const id = await db.friends.add({
            name,
            age
        });
        console.log(`added ${id}`)

    } catch (error) {
        console.error("error", error)
    }
}

export async function FriendList() {
    const friends = await db.friends.toArray()
  
    return (
      <ul>
        {friends?.map((friend) => (
          <li key={friend.id}>
            {friend.name}, {friend.age}
          </li>
        ))}
      </ul>
    );
  }