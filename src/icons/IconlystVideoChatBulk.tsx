import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoChatBulk = ({
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
      d="M19.553 5.277c-3.704-3.703-9.73-3.703-13.434 0-2.809 2.808-3.573 7.118-1.913 10.7.19.473.315.804.315 1.083 0 .335-.142.751-.279 1.152-.264.778-.564 1.66.08 2.301.645.645 1.525.343 2.302.075.4-.136.811-.278 1.141-.278.278 0 .621.132 1.054.3l.03.011a9.52 9.52 0 0 0 10.705-1.907c3.703-3.703 3.703-9.73 0-13.437"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.859 13.646-.001.002c-.882.8-1.928 1.456-3.025 1.9-.301.12-.601.18-.89.18-.348 0-.68-.088-.972-.26-.52-.307-.852-.84-.936-1.502-.14-1.368-.14-2.68-.001-3.918.089-.673.429-1.205.959-1.51.542-.313 1.216-.34 1.848-.079a10.2 10.2 0 0 1 3.02 1.901c.495.447.77 1.03.77 1.638.002.607-.272 1.192-.772 1.648M11.97 9.781q.14 0 .297.064c.982.404 1.85.95 2.583 1.622.128.116.282.304.282.533.001.23-.153.418-.282.536a8.8 8.8 0 0 1-2.576 1.62c-.217.085-.416.093-.541.02-.15-.09-.196-.287-.208-.38a16.7 16.7 0 0 1-.002-3.566c.017-.132.069-.307.219-.394a.46.46 0 0 1 .228-.055"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoChatBulk;
