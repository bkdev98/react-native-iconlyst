import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatHouseBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.814 11.237a.745.745 0 0 1-1.054.121l-.284-.226v2.482a.75.75 0 0 1-1.5 0V9.941l-2.333-1.854a.544.544 0 0 0-.68 0L9.626 9.943v3.671a.75.75 0 0 1-1.5 0v-2.479l-.282.223a.75.75 0 1 1-.933-1.175l4.119-3.271a2.04 2.04 0 0 1 2.546 0l4.118 3.271a.75.75 0 0 1 .12 1.054m-.451-8.114H7.24a4.2 4.2 0 0 0-4.19 4.202v6.939a4.2 4.2 0 0 0 4.19 4.202h1.068c.51 0 .988.2 1.349.562l1.422 1.425c.326.328.76.509 1.22.509h.002c.46 0 .895-.181 1.22-.509l1.423-1.425c.36-.362.84-.562 1.349-.562h1.069c2.309 0 4.188-1.885 4.188-4.202V7.325c0-2.317-1.88-4.202-4.188-4.202"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatHouseBold;
