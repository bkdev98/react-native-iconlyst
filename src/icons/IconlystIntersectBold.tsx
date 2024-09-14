import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntersectBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.578 3.009h-6.036c-2.27 0-3.767 1.687-3.895 3.837-.01.165.125.3.291.3h4.633c2.865 0 4.79 2.013 4.79 5.008v4.417c0 .165.135.3.3.291 2.244-.13 3.84-1.711 3.84-4.07V7.105c0-2.45-1.577-4.096-3.923-4.096"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.985 10.811c0 .17.2.263.33.152l2.487-2.117a.2.2 0 0 0-.13-.352H8.285a.3.3 0 0 0-.3.3zM8.118 13.088a.29.29 0 0 0-.102.245q.042.487.179.908c.06.187.288.243.441.119 1.72-1.398 5.012-4.042 5.977-4.817.144-.116.148-.332-.002-.44a3.2 3.2 0 0 0-1.083-.487.29.29 0 0 0-.254.063zM9.517 15.554c-.146.12-.147.343.011.445q.532.344 1.213.463a.03.03 0 0 0 .024-.008l5.131-4.426a.29.29 0 0 0 .102-.238 4.2 4.2 0 0 0-.158-.911c-.057-.191-.289-.25-.443-.123zM16.015 14.312a.2.2 0 0 0-.33-.151l-2.324 2.012a.2.2 0 0 0 .13.351h2.224a.3.3 0 0 0 .3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.638 12.863V8.446a.287.287 0 0 0-.3-.291c-2.244.13-3.838 1.712-3.838 4.07v5.687c0 2.451 1.576 4.097 3.92 4.097h6.036c2.27 0 3.77-1.688 3.897-3.839a.287.287 0 0 0-.291-.3h-4.636c-2.864 0-4.788-2.012-4.788-5.007"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIntersectBold;
