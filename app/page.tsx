export default function Home() {
  return (
    <div className="px-[18px] pb-[19px] w-full flex gap-8">
      <div className="card w-1/4 h-[1054px] bg-card_bg py-5 mt-8">
        <h2>I'm a quarter</h2>
      </div>
      <div className="flex flex-col w-1/2 gap-8 mt-8">
        <div className="card h-[673px] bg-card_bg p-5">
        <h2>I'm half</h2>
        </div>
        <div className="card h-[349px] bg-card_bg p-5">
        <h2>I'm half</h2>
        </div>
      </div>  
      <div className="flex flex-col w-1/4 gap-8 mt-[18px]">
        <div className="card h-[740px] bg-card_bg">
        <h2>I'm quarter</h2>
        </div>
        <div className="card h-[296px] bg-card_bg p-5">
        <h2>I'm quarter</h2>
        </div>
      </div>
    </div>
  
  );
}
