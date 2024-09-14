import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSettingBulk = ({
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
      d="M18.015 8.623a.21.21 0 0 1-.183-.18c-.295-2.108-2.01-4.74-5.331-4.74-3.57 0-5.04 2.91-5.324 4.743a.21.21 0 0 1-.183.176c-2.36.29-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.739 4.222c.385.156.74.245 1.046.297.113.02.216-.065.234-.179.063-.396.225-.772.468-1.099a.22.22 0 0 0 0-.266 2.49 2.49 0 0 1-.163-2.73 2.49 2.49 0 0 1 2.448-1.226.225.225 0 0 0 .231-.133 2.49 2.49 0 0 1 2.285-1.506c1.025 0 1.899.621 2.283 1.506.04.09.133.144.231.133a2.49 2.49 0 0 1 2.449 1.225 2.49 2.49 0 0 1-.164 2.732.225.225 0 0 0 0 .266 2.5 2.5 0 0 1 .472 1.147c.015.11.109.194.219.184.372-.037.87-.129 1.433-.354a4.64 4.64 0 0 0 2.716-4.219c0-2.483-1.594-4.29-3.95-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.324 17.719a1.405 1.405 0 0 1-.006-2.808h.012a1.405 1.405 0 0 1-.006 2.808m3.173-.437-.379-.22c.064-.24.11-.487.11-.747s-.046-.508-.11-.747l.38-.22a.751.751 0 0 0-.75-1.298l-.37.213a2.9 2.9 0 0 0-1.304-.742v-.435a.75.75 0 0 0-1.5 0v.435a2.9 2.9 0 0 0-1.304.742l-.37-.213a.749.749 0 1 0-.75 1.299l.38.219a2.9 2.9 0 0 0-.11.747c0 .259.045.507.11.747l-.38.219a.75.75 0 0 0 .75 1.299l.37-.214a2.9 2.9 0 0 0 1.304.743v.439a.75.75 0 0 0 1.5 0v-.44a2.9 2.9 0 0 0 1.303-.742l.37.214a.746.746 0 0 0 1.024-.274.75.75 0 0 0-.274-1.024"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSettingBulk;
