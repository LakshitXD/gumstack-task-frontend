import { Box, Image } from "@chakra-ui/react"

// Sample card from Listitems

function Listitems({ content }) {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={content.attributes['image-url'] || 'https://cdn.discordapp.com/attachments/770140406665969694/933024422145716264/ia-never-gonna-give-you-up-rick-astley-trionfale-remaster-4k-v3-500421.png'} />

            <Box p='6' align='center'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {content.attributes['city-name'] + ' | ' + content.attributes['country-name']}
                </Box>
            </Box>
        </Box>
    )
}

export default Listitems