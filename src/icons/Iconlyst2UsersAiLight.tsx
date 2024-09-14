import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst2UsersAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.177 19.688c0-1.829-1.231-4.025-4.621-4.627"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.81 7.651a4.187 4.187 0 1 1-8.374 0 4.187 4.187 0 0 1 8.374 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.414 14.572c2.748.565 3.586 2.553 3.586 4.08M16.484 5.157a3.104 3.104 0 0 1 .45 5.944M5.485 19.347l-.096-.262a3.6 3.6 0 0 0-2.128-2.13L3 16.858l.261-.097a3.6 3.6 0 0 0 2.128-2.13l.096-.262.097.261a3.6 3.6 0 0 0 2.128 2.131l.261.097-.261.097a3.6 3.6 0 0 0-2.128 2.13zM10.57 20.536a1.7 1.7 0 0 0-1.126-1.128c.54-.165.962-.588 1.127-1.129.164.541.587.964 1.126 1.129-.54.164-.962.588-1.126 1.128"
    />
  </Svg>
);
export default Iconlyst2UsersAiLight;
