import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikePostCardBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.475 10.622c.588-.391 1.476-1.107 1.707-1.837.155-.49.034-1.1-.498-1.27a.87.87 0 0 0-.768.132.75.75 0 0 1-.89-.005.83.83 0 0 0-.758-.127c-.533.17-.654.78-.498 1.267.24.742 1.122 1.454 1.705 1.84"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.394 15.29H9.556a.75.75 0 0 1 0-1.5h5.838a.75.75 0 0 1 0 1.5m-1.157 2.729h-3.525a.75.75 0 1 1 0-1.5h3.525a.75.75 0 0 1 0 1.5m-3.43-11.933a2.33 2.33 0 0 1 1.674.093 2.4 2.4 0 0 1 1.65-.097c1.27.408 1.914 1.793 1.48 3.156-.518 1.637-2.545 2.792-2.774 2.919a.75.75 0 0 1-.72.001c-.229-.124-2.243-1.261-2.777-2.918v-.003c-.434-1.363.21-2.748 1.466-3.151M16.048 2.5H8.903C6.485 2.5 4.86 4.196 4.86 6.721v10.558c0 2.525 1.625 4.221 4.043 4.221h7.145c2.42 0 4.044-1.696 4.044-4.221V6.721c0-2.525-1.625-4.221-4.043-4.221"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLikePostCardBold;
