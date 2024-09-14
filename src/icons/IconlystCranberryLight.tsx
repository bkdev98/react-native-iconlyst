import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCranberryLight = ({
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
      d="m14.382 4.442.089-.428a.174.174 0 0 0-.242-.194l-.313.141a.17.17 0 0 1-.188-.029l-.497-.444a.174.174 0 0 0-.282.077l-.189.602a.17.17 0 0 1-.138.12l-.514.082a.174.174 0 0 0-.078.31l.324.25a2.074 2.074 0 1 0 2.029-.486M7.481 8.02l-.217-.33a.158.158 0 0 0-.28.03l-.11.291a.16.16 0 0 1-.139.102l-.604.034a.158.158 0 0 0-.13.23l.264.507a.16.16 0 0 1-.012.165l-.276.383a.158.158 0 0 0 .148.249l.367-.048a1.88 1.88 0 1 0 .989-1.612M4.177 14.367l-.354-.178a.158.158 0 0 0-.227.166l.051.307a.16.16 0 0 1-.07.158l-.506.331a.158.158 0 0 0 .002.265l.482.307c.05.032.079.09.073.15l-.048.468a.158.158 0 0 0 .253.142l.294-.225a1.88 1.88 0 1 0 .05-1.89M14.018 15.658c.849-2.443 4.278-3.34 6.982-1.131-.958-.188-3.081-.045-3.915 2.028s-2.354 2.733-4.627 2.326"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.018 20.557c1.831-2.066 5.07-7.368 3.38-12.055"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.86 10.803c1.847 1.96 2.972 6.044 2.766 7.133-.395-1.126-3.238-2.193-4.871-2.42"
    />
  </Svg>
);
export default IconlystCranberryLight;
