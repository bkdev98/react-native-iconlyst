import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLoveBroken = ({
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
      d="M8.958 17.026c-.347-1.086.059-2.325 1.198-2.692.6-.19 1.254-.08 1.757.297a1.96 1.96 0 0 1 1.755-.297c1.139.367 1.549 1.606 1.201 2.692-.54 1.718-2.956 3.044-2.956 3.044s-2.395-1.305-2.955-3.044"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.93c-3.617 0-4.897 3.265-4.897 4.898C4.833 8.848 3 10.373 3 12.968c0 1.68 1 3.126 2.436 3.775M18.563 16.743A4.14 4.14 0 0 0 21 12.968c0-2.595-1.83-4.139-4.103-4.14 0-1.07-.55-2.84-1.945-3.933"
    />
  </Svg>
);
export default IconlystCloudLoveBroken;
