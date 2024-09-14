import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire2Bulk = ({
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
      d="M10.3 19.43c.168.7.435 1.365.74 1.962a8.14 8.14 0 0 1-3.638-1.434 7.6 7.6 0 0 1-2.97-5.642 8.6 8.6 0 0 1 2.1-5.993.498.498 0 0 1 .875.285c.071.825.431 2.396.756 3.464.356-.793.903-1.602 1.38-2.307l.01-.016c.187-.277.357-.53.488-.741.772-1.362.897-3 .333-4.48-.081-.195-.588-1.323-.588-1.323a.5.5 0 0 1 .642-.669 17.8 17.8 0 0 1 6.702 4.733 11.17 11.17 0 0 1 2.442 7.115c.002.035.002.07.002.09a6.86 6.86 0 0 1-1.664 4.577c-.353-.407-.869-.87-1.326-1.28l-.038-.033a19 19 0 0 1-.481-.44c-.725-.696-1.511-1.928.045-4.578a.75.75 0 0 0-.073-.864.75.75 0 0 0-.839-.217c-4.28 1.624-5.048 4.482-5.075 6.244-.008.516.012 1.053.178 1.547"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.594 18.899c.403.361.902.809 1.188 1.141a.1.1 0 0 0 .025.019l.02.014a6.92 6.92 0 0 1-3.996 1.425c-.486-.755-.931-1.684-1.12-2.639a4.7 4.7 0 0 1-.104-1.034c.032-1.049.444-2.619 2.321-3.874-.511 1.753-.144 3.237 1.098 4.43.147.141.343.317.558.51z"
    />
  </Svg>
);
export default IconlystFire2Bulk;
