import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenCheckTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.777 14.422v1.53c0 2.499-1.669 3.98-4.143 3.97H7.642c-2.473.01-4.142-1.471-4.142-3.97V10.67c0-.481.122-.936.35-1.343.204-.367.488-.692.838-.936l5.568-3.875a2.4 2.4 0 0 1 2.766 0l2.393 1.661"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.854 9.328 5.916 4.769c1.115.88 2.686.88 3.793 0l.684-.553"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.19 6.095a4.312 4.312 0 1 1-.001 8.623 4.312 4.312 0 0 1 0-8.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.955 9.598 1.475 1.477 3.039-3.04"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEmailOpenCheckTwoTone;
