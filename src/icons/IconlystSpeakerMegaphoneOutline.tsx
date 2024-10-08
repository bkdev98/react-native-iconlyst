import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphoneOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.641 2.3a.75.75 0 1 1 .302 1.469l-.15-.735zm.2 13.835-.15.734-.444-.091a2526 2526 0 0 1-4.85-1.005c-2.714-.565-5.62-1.177-6.273-1.34-.838-.21-1.686-.826-2.318-1.649A5.28 5.28 0 0 1 2.7 9.58c0-1.26.466-2.37 1.107-3.205.631-.823 1.48-1.44 2.318-1.65.653-.163 3.547-.772 6.248-1.334a2337 2337 0 0 1 4.827-1l.442-.091.151.734.151.735-.44.09a2548 2548 0 0 0-4.825 1c-2.725.568-5.575 1.168-6.19 1.322-.431.108-1.012.481-1.492 1.107A3.78 3.78 0 0 0 4.2 9.58c0 .884.328 1.68.797 2.291.48.625 1.06.999 1.492 1.107.615.154 3.478.757 6.215 1.327a2423 2423 0 0 0 4.847 1.004l.442.091zm0 0-.15.734a.75.75 0 1 0 .302-1.469z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.574 13.014a.75.75 0 0 1 .75.75v4.86a1.626 1.626 0 0 0 3.253 0v-3.786a.75.75 0 1 1 1.5 0v3.786a3.126 3.126 0 0 1-6.253 0v-4.86a.75.75 0 0 1 .75-.75M16.69 5.234c-.482 1.073-.8 2.608-.8 4.343 0 1.736.318 3.27.8 4.344.514 1.144 1.07 1.484 1.406 1.484s.89-.34 1.405-1.484c.482-1.073.8-2.608.8-4.344 0-1.735-.318-3.27-.8-4.343-.514-1.144-1.07-1.484-1.405-1.484-.337 0-.892.34-1.406 1.484m-1.368-.615c.556-1.236 1.478-2.369 2.774-2.369 1.295 0 2.218 1.133 2.773 2.37.588 1.307.932 3.06.932 4.957s-.344 3.651-.932 4.959c-.555 1.236-1.478 2.369-2.773 2.369s-2.218-1.133-2.774-2.37c-.587-1.307-.931-3.06-.931-4.958 0-1.896.344-3.65.931-4.958"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerMegaphoneOutline;
