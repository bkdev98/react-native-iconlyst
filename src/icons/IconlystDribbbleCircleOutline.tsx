import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDribbbleCircleOutline = ({
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
      d="M5.748 12a6.068 6.068 0 1 1 12.136.002A6.068 6.068 0 0 1 5.748 12m6.067-4.566a4.568 4.568 0 1 0 .002 9.135 4.568 4.568 0 0 0-.002-9.135"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.506 6.418a.75.75 0 0 1 1.05.153c2.18 2.926 3.835 6.224 4.483 10.004a.75.75 0 1 1-1.479.253c-.599-3.494-2.133-6.576-4.207-9.36a.75.75 0 0 1 .153-1.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.043 7.667a.75.75 0 0 1 .183 1.045c-1.18 1.682-3.139 2.541-4.962 2.98-1.84.442-3.671.488-4.76.444a.75.75 0 1 1 .06-1.5c1.003.042 2.686-.003 4.349-.403 1.68-.404 3.214-1.14 4.085-2.382a.75.75 0 0 1 1.045-.184M11.523 12.013c1.773-.7 3.868-.877 5.807-.301a.75.75 0 1 1-.428 1.438c-1.583-.471-3.334-.332-4.828.258-1.502.594-2.662 1.607-3.166 2.798a.75.75 0 0 1-1.382-.585c.702-1.658 2.231-2.91 3.997-3.608"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDribbbleCircleOutline;
