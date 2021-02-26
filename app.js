const packetFields = document.querySelectorAll('.packet__field');
const maxSizeMesure = 32;
for ( packet of packetFields ) {
    let percent = packet.getAttribute('data-size')/maxSizeMesure*100;
    packet.style.flexBasis = `${percent}%`;
    console.log(packet.parentElement.width)
}