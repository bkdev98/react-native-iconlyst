import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImtokenBroken = ({
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
      d="M12.245 18.323c-4.305.375-8.363-2.25-8.72-6.338-.292-3.375 1.786-4.789 3.417-4.931s3.086 1.009 3.21 2.411-.724 1.961-1.309 2.01a.98.98 0 0 1-1.095-.84c-.045-.521.154-.589.105-1.125-.086-.979-.94-1.095-1.41-1.054-.562.05-1.59.71-1.447 2.355.142 1.647 1.736 2.97 3.821 2.79 2.25-.198 3.818-1.95 3.938-4.41-.007-.394.29-.715.558-.97.983-.927 4.523-3.117 7.875-2.423 0 0 .108.03.168.08.071.062.099.2.099.2.414 5.62-1.986 9.168-5.051 10.933"
    />
  </Svg>
);
export default IconlystImtokenBroken;
