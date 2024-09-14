import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbell1Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M8.113 13.02c-.645-.5-1.35-.693-2.043-.56-1.137.218-3.306 2.486-3.507 3.44-.213.826.035 1.717 1.927 3.61 1.545 1.544 2.423 1.993 3.132 1.993q.238-.001.458-.06c.974-.206 3.242-2.374 3.461-3.512.133-.694-.06-1.4-.56-2.044zM19.51 4.491c-1.893-1.893-2.786-2.144-3.589-1.933-.975.205-3.244 2.374-3.462 3.512-.134.696.06 1.402.56 2.041l2.87 2.871c.644.5 1.351.693 2.041.56 1.138-.22 3.306-2.488 3.507-3.44.212-.827-.036-1.719-1.927-3.61" />
    </G>
    <Path
      fill={props.color}
      d="M13.004 8.223c.031-.032.038-.082.014-.112l2.87 2.871c-.03-.024-.079-.016-.111.015l-4.78 4.782c-.032.032-.039.08-.016.108L8.113 13.02c.029.022.079.016.11-.015z"
    />
  </Svg>
);
export default IconlystDumbbell1Bulk;
