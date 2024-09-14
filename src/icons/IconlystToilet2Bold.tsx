import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet2Bold = ({
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
      d="M12 8.25a1.151 1.151 0 0 0 0 2.3 1.151 1.151 0 0 0 0-2.3"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.38 10.287-.717 5.271a3.796 3.796 0 0 1-3.745 3.272 3.79 3.79 0 0 1-3.746-3.272l-.718-5.271a4.504 4.504 0 0 1 7.858-3.564 4.5 4.5 0 0 1 1.069 3.564m1.428-2.037h2.236a.2.2 0 0 0 .2-.2v-.731c0-2.883-1.854-4.819-4.615-4.819H8.37c-2.762 0-4.616 1.936-4.616 4.819v.731c0 .11.09.2.2.2H6.19a.75.75 0 0 1 0 1.5H3.955a.2.2 0 0 0-.2.2v1.1c0 .11.09.2.2.2h2.226a.75.75 0 0 1 0 1.5H3.955a.2.2 0 0 0-.2.2v1.1c0 .11.09.2.2.2h2.252a.75.75 0 0 1 0 1.5H3.955a.2.2 0 0 0-.2.2v.73c0 2.882 1.854 4.82 4.616 4.82h7.259c2.76 0 4.614-1.938 4.614-4.82v-.73a.2.2 0 0 0-.2-.2h-2.253a.75.75 0 0 1 0-1.5h2.253a.2.2 0 0 0 .2-.2v-1.1a.2.2 0 0 0-.2-.2h-2.227a.75.75 0 1 1 0-1.5h2.227a.2.2 0 0 0 .2-.2v-1.1a.2.2 0 0 0-.2-.2h-2.236a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToilet2Bold;
