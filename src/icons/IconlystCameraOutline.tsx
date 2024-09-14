import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M15.318 3.354c.583.233.996.651 1.366 1.265l.122.212.452.867.015.025.013.02.039.053c.206.225.55.36.778.36a3.897 3.897 0 0 1 3.892 3.696l.005.2v5.795a4.97 4.97 0 0 1-4.754 4.966l-.216.004H6.97a4.97 4.97 0 0 1-4.965-4.754L2 15.847v-5.795a3.897 3.897 0 0 1 3.897-3.896c.227 0 .572-.136.779-.36l.007-.008.009-.012.051-.079.451-.865c.402-.731.84-1.22 1.488-1.478 1.19-.472 5.447-.472 6.636 0M9.237 4.748c-.222.088-.422.292-.636.646l-.093.16-.385.745-.094.171c-.08.132-.159.243-.249.341-.46.5-1.121.79-1.709.838l-.174.007-.164.006a2.4 2.4 0 0 0-2.227 2.226l-.006.164v5.795a3.47 3.47 0 0 0 3.28 3.465l.19.005h10.06a3.47 3.47 0 0 0 3.465-3.28l.005-.19v-5.795a2.397 2.397 0 0 0-2.233-2.39l-.164-.006-.174-.007a2.7 2.7 0 0 1-1.71-.839 2 2 0 0 1-.246-.337l-.019-.033-.022-.04-.116-.218-.324-.627c-.219-.397-.42-.64-.635-.762l-.094-.045-.12-.04c-1.029-.29-4.608-.277-5.406.04M12 9.2a3.929 3.929 0 1 1 0 7.857A3.929 3.929 0 0 1 12 9.2m0 1.5a2.429 2.429 0 1 0 0 4.857 2.429 2.429 0 0 0 0-4.857M17.505 8.5a1 1 0 0 1 .116 1.993l-.116.007a1 1 0 0 1-.126-1.993z"
    />
  </Svg>
);
export default IconlystCameraOutline;
