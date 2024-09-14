import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAubergineOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.104 7.115c-2-1.783-5.041.033-4.224 2.843.747 2.567 3.3 5.93 6.377 7.986 1.528 1.021 3.128 1.68 4.639 1.79 1.485.11 2.912-.307 4.174-1.497.971-.916 1.453-2.41 1.263-3.804-.185-1.359-.996-2.557-2.572-3.018-.544-.159-1.07-.305-1.581-.447-2.967-.822-5.45-1.51-8.076-3.853M2.44 10.377C1.233 6.23 5.895 3.135 9.102 5.996c2.349 2.095 4.481 2.69 7.434 3.513.521.145 1.068.297 1.646.466 2.224.65 3.384 2.397 3.638 4.255.248 1.824-.363 3.817-1.721 5.099-1.587 1.497-3.436 2.04-5.313 1.902-1.85-.136-3.698-.928-5.363-2.04-3.307-2.21-6.118-5.841-6.983-8.814"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.17 2.575a.75.75 0 0 1 .418.975c-.16.402-.113.892.092 1.415.202.518.522.968.74 1.208a.75.75 0 1 1-1.11 1.01A5.7 5.7 0 0 1 2.283 5.51c-.277-.707-.445-1.623-.087-2.518a.75.75 0 0 1 .975-.418M9.054 6.196a.75.75 0 0 1 .595.878l-.282 1.467A1.576 1.576 0 0 1 7.819 9.82h-.875a.076.076 0 0 0-.076.076v.362c0 .87-.705 1.576-1.575 1.576h-1.64a.75.75 0 0 1 0-1.5h1.64a.076.076 0 0 0 .075-.076v-.362c0-.87.706-1.576 1.576-1.576h.875a.076.076 0 0 0 .075-.061l.282-1.467a.75.75 0 0 1 .878-.595"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAubergineOutline;
