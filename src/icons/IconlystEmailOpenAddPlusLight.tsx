import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenAddPlusLight = ({
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
      d="M19.277 14.422v1.53c0 2.499-1.669 3.98-4.143 3.97H7.142C4.669 19.933 3 18.452 3 15.953V10.67c0-.481.122-.936.35-1.343.204-.367.488-.692.838-.936l5.567-3.875a2.4 2.4 0 0 1 2.767 0l2.393 1.661M18.144 10.406h-2.91m1.454 1.454V8.951"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.688 6.095a4.312 4.312 0 1 1 0 8.623 4.312 4.312 0 0 1 0-8.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.354 9.328 5.916 4.769c1.115.88 2.686.88 3.793 0l.683-.553"
    />
  </Svg>
);
export default IconlystEmailOpenAddPlusLight;
