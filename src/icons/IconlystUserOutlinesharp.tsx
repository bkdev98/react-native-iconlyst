import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.2 4.643a3.363 3.363 0 1 0-.002 6.726 3.363 3.363 0 0 0 .002-6.726M7.336 8.005a4.863 4.863 0 1 1 9.726.001 4.863 4.863 0 0 1-9.726 0M6.603 19.162c1.64.85 3.549 1.2 5.627 1.195h.003c2.078.006 3.986-.344 5.627-1.195-.952-2.223-3.047-3.295-5.626-3.289h-.004c-2.583-.006-4.675 1.064-5.627 3.289m5.629-4.789c-3.273-.008-6.198 1.516-7.269 4.902l-.177.56.502.307c2.062 1.257 4.456 1.721 6.944 1.715 2.487.006 4.882-.458 6.943-1.715l.502-.306-.177-.56c-1.07-3.383-3.999-4.91-7.268-4.903"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.847 13.523c-2.365-.006-4.525 1.105-5.312 3.593l-.177.561.502.306a8.2 8.2 0 0 0 2.598 1.007l.734.154.308-1.468-.734-.154A7 7 0 0 1 3.193 17c.661-1.33 1.987-1.982 3.65-1.978l.75.002.004-1.5zM8.954 6.216l-.692-.288a3.633 3.633 0 1 0 1.44 5.629l.47-.585-1.17-.939-.47.586a2.135 2.135 0 0 1-3.635-2.155 2.133 2.133 0 0 1 2.789-1.151l.693.288zM17.654 13.523c2.364-.006 4.525 1.105 5.311 3.593l.178.561-.502.306a8.2 8.2 0 0 1-2.599 1.007l-.734.154-.307-1.468.734-.154A7 7 0 0 0 21.307 17c-.66-1.33-1.987-1.982-3.65-1.978l-.75.002-.003-1.5zM15.276 6.418l.663-.35a3.634 3.634 0 1 1-1.175 5.445l-.46-.592 1.184-.92.46.591a2.134 2.134 0 1 0 .692-3.198l-.664.35z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserOutlinesharp;
