import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsbStorage2Bold = ({
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
      d="M8.343 14.695c-.14.13-.21.31-.21.5 0 .18.07.36.21.49.13.14.31.21.49.21.19 0 .37-.07.5-.21.13-.13.21-.31.21-.49 0-.19-.08-.37-.21-.5a.7.7 0 0 0-.5-.21c-.18 0-.36.07-.49.21"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.838 8.843-1.924 1.924v-.002c-.15-.2-.32-.4-.51-.59l-3.55-3.55c-.19-.19-.39-.36-.59-.51h-.002l1.924-1.924c.621-.62 1.39-.59 2.056.075l2.521 2.521c.341.34.52.718.52 1.093 0 .338-.153.671-.445.963m-8.795 6.352c0 .58-.23 1.14-.65 1.55-.41.42-.97.65-1.56.65s-1.14-.23-1.55-.65c-.42-.41-.65-.97-.65-1.55 0-.59.23-1.15.65-1.56.83-.83 2.28-.83 3.11 0 .42.41.65.97.65 1.56m10.74-7.315c0-.77-.34-1.537-.96-2.154l-2.52-2.52c-1.253-1.252-2.97-1.285-4.178-.076L11.77 5.485a2.3 2.3 0 0 0-.447-.05c-.94-.03-1.83.34-2.57 1.08l-5.14 5.14c-.74.74-1.11 1.63-1.08 2.56.04.91.45 1.79 1.19 2.53l3.56 3.56c.79.8 1.72 1.2 2.63 1.2.87 0 1.73-.37 2.46-1.09l5.14-5.14c.74-.74 1.11-1.63 1.08-2.57 0-.149-.02-.298-.049-.446L20.9 9.904c.58-.579.884-1.279.884-2.024"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.673 5.501-.01.01c-.286.3-.269.77.031 1.055a.74.74 0 0 0 .514.205c.201 0 .402-.08.551-.236a.75.75 0 1 0-1.086-1.034M17.472 7.225l-.011.01a.745.745 0 0 0-.045 1.054c.148.162.35.244.554.244a.75.75 0 1 0-.498-1.308"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUsbStorage2Bold;
