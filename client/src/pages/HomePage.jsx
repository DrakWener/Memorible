
import GridItem from '../components/GridItem'
import Grid from '../components/Grid'
import Header from '../components/Header'

export default function HomePage() {
  return (
    <div className='w-full relative min-h-screen max-h-fit bg-gray-100'>

      <Header></Header>

      {/* Main */}
      <div className='container h-fit h-full mx-auto bg-gray-100'>
        <div className='flex w-full justify-center'>
          <h2 className='w-full text-5xl text-center my-20 text-wrap px-[500px]'>
            <b>Memorible</b> is a way to <b>remember</b> things <b className='underline underline-offset-2'>forever</b> <b>simple.</b>
          </h2>
        </div>
        

        {/* Sections */}
        <div className='bg-white py-4 rounded-lg px-4'>
          <Grid SectionName="Popular Tests:">
            <GridItem>Test</GridItem>
            <GridItem>Test</GridItem>
            <GridItem>Test</GridItem>
            <GridItem>Test</GridItem>
            <GridItem>Test</GridItem>
            <GridItem>Test</GridItem>
            <GridItem>Test</GridItem>
            <GridItem>Test</GridItem>
          </Grid>

          <Grid SectionName='Popular Groups:'>
            <GridItem>Group</GridItem>
            <GridItem>Group</GridItem>
            <GridItem>Group</GridItem>
            <GridItem>Group</GridItem>
          </Grid>

          <Grid SectionName='Pupular Categories:'>
            <GridItem>Category</GridItem>
            <GridItem>Category</GridItem>
            <GridItem>Category</GridItem>
            <GridItem>Category</GridItem>
          </Grid>
        </div>



      </div>

      <footer className='bg-black h-[300px] mt-10 text-white flex justify-center items-center'>Footer</footer>
    </div>
  )
}
