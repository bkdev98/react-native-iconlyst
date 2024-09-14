import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLock3Bulk = ({
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
      d="M19.356 5.136C18.65 4.431 13.025 2.5 12 2.5c-1.027 0-6.653 1.931-7.355 2.637-.562.562-.554.996-.51 3.4.018.974.042 2.299.042 4.133 0 6.407 7.6 8.785 7.678 8.808a.48.48 0 0 0 .29 0c.077-.023 7.679-2.401 7.679-8.808 0-1.831.024-3.155.042-4.129.043-2.407.05-2.841-.51-3.405"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.366 15.14a2.106 2.106 0 0 0 2.106-2.1V11.5c0-.793-.444-1.477-1.091-1.838V9.19a2.38 2.38 0 0 0-2.41-2.35 2.37 2.37 0 0 0-2.353 2.35v.472A2.1 2.1 0 0 0 8.526 11.5v1.54c0 1.158.945 2.1 2.107 2.1zm0-4.25h-2.733a.61.61 0 0 0-.607.61v1.54c0 .33.272.6.607.6h2.733a.604.604 0 0 0 .606-.6V11.5a.61.61 0 0 0-.606-.61M12.88 9.2v.189h-1.763v-.187a.874.874 0 0 1 .869-.863h.01c.482 0 .878.389.884.861"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldLock3Bulk;
