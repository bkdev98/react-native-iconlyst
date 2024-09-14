import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneOutlinecurved = ({
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
      d="M10.762 14.517a.75.75 0 0 0 1.06 0l3.899-3.9a.75.75 0 0 0-1.06-1.06l-3.368 3.368-1.361-1.363a.75.75 0 0 0-1.062 1.06z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.578 13.097c0 6.697 5.485 9.477 8.422 9.477s8.422-2.78 8.422-9.478c0-1.893.024-3.27.042-4.284l.001-.045c.046-2.537.056-3.067-.599-3.721-.832-.832-4.276-2.827-7.866-2.827-3.591 0-7.034 1.995-7.864 2.827-.657.654-.647 1.185-.601 3.726v.044c.019 1.013.043 2.39.043 4.28m1.619-6.99C5.682 5.62 8.734 3.719 12 3.719s6.319 1.9 6.805 2.388c.192.192.199.51.161 2.637a219 219 0 0 0-.044 4.353c0 6.086-5.074 7.977-6.922 7.977s-6.922-1.89-6.922-7.978c0-1.9-.024-3.282-.042-4.303l-.001-.044c-.039-2.131-.032-2.45.162-2.642"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldDoneOutlinecurved;
