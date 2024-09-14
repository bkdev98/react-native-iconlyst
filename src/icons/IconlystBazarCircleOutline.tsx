import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBazarCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12 17.28c-2.11 0-4.72-1.12-5.19-6.46-.06-.68.37-1.33 1.03-1.53.45-.16 1.04-.29 2.52-.45 1.09-.12 2.2-.12 3.29 0 1.47.16 2.06.29 2.54.46.64.2 1.07.84 1.01 1.52-.47 5.34-3.08 6.46-5.19 6.46zm-3.69-6.56c.45 5.06 2.89 5.06 3.69 5.06s3.25 0 3.69-5.09c-.38-.1-.88-.21-2.21-.36-.98-.11-1.98-.1-2.97 0-1.33.15-1.83.25-2.21.38z"
    />
    <Path
      fill={props.color}
      d="M9.96 11.45s-.1 0-.15-.02a.75.75 0 0 1-.59-.88c.34-1.68 1-3.91 2.77-3.91s2.41 2.06 2.77 3.86c.08.41-.18.8-.59.88s-.8-.18-.88-.59c-.35-1.71-.81-2.66-1.3-2.66-.18 0-.79.2-1.3 2.71-.07.36-.38.6-.73.6z"
    />
  </Svg>
);
export default IconlystBazarCircleOutline;
