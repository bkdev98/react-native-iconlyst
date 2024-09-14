import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnvatoCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.959 6.525a.75.75 0 0 1 .424.073c.37.184.54.51.64.7l.023.045c1.152 2.154 1.31 4.634.592 6.61-.727 1.998-2.384 3.528-4.796 3.528-3.855 0-6.246-4.186-4.101-8.076a.75.75 0 0 1 1.375.149c.205.69.456 1.206.693 1.586a8 8 0 0 1 .957-2.01c.838-1.247 2.176-2.36 4.193-2.605m-4.73 6.185-.381.646h-.001l-.002-.002-.003-.002-.009-.005-.022-.014-.063-.042a3 3 0 0 1-.19-.147 4.4 4.4 0 0 1-.571-.58 6 6 0 0 1-.52-.743c-.337 2.315 1.31 4.16 3.375 4.16 1.658 0 2.83-1.01 3.386-2.54.561-1.545.46-3.569-.489-5.361-1.275.266-2.139 1.01-2.728 1.887a6.7 6.7 0 0 0-1.036 2.826.75.75 0 0 1-1.127.563z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnvatoCircleOutline;
