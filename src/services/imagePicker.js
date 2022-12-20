import d01 from '../assets/01d.svg';
import n01 from '../assets/01n.svg';
import d02 from '../assets/02d.svg';
import n02 from '../assets/02n.svg';
import d03 from '../assets/03d.svg';
import n03 from '../assets/03n.svg';
import d04 from '../assets/04d.svg';
import n04 from '../assets/04n.svg';
import d09 from '../assets/09d.svg';
import n09 from '../assets/09n.svg';
import d10 from '../assets/10d.svg';
import n10 from '../assets/10n.svg';
import d11 from '../assets/11d.svg';
import n11 from '../assets/11n.svg';
import d13 from '../assets/13d.svg';
import n13 from '../assets/13n.svg';
import d50 from '../assets/50d.svg';
import n50 from '../assets/50n.svg';

export const getImage = (icon) => {
    const iconNameArr = icon.split("", 3);
    const newIconName = `${iconNameArr[2]}${iconNameArr[0]}${iconNameArr[1]}`;

    let selectedImage;

    switch(newIconName) {
        case 'd01':
            selectedImage = d01
            break;
        case 'n01':
            selectedImage = n01
            break;
        case 'd02':
            selectedImage = d02
            break;
        case 'n02':
            selectedImage = n02
            break;
        case 'd03':
            selectedImage = d03
            break;
        case 'n03':
            selectedImage = n03
            break;
        case 'd04':
            selectedImage = d04
            break;
        case 'n04':
            selectedImage = n04
            break;
        case 'd09':
            selectedImage = d09
            break;
        case 'n09':
            selectedImage = n09
            break;
        case 'd10':
            selectedImage = d10
            break;
        case 'n10':
            selectedImage = n10
            break;
        case 'd11':
            selectedImage = d11
            break;
        case 'n11':
            selectedImage = n11
            break;
        case 'd13':
            selectedImage = d13
            break;
        case 'n13':
            selectedImage = n13
            break;
        case 'd50':
            selectedImage = d50
            break;
        case 'n50':
            selectedImage = n50
            break;
        default:
            break;
    }

    return selectedImage;
}