import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionUpDownOutline = ({
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
      d="M6.305 3.488a.75.75 0 0 1 .53.22L9.64 6.511a.75.75 0 1 1-1.06 1.061L7.054 6.048v11.904l1.524-1.525a.75.75 0 0 1 1.061 1.06l-2.805 2.806a.75.75 0 0 1-1.06 0L2.97 17.488a.75.75 0 1 1 1.06-1.061l1.525 1.524V6.048L4.03 7.573a.75.75 0 0 1-1.06-1.06l2.805-2.806a.75.75 0 0 1 .53-.22M15.548 19.81c.62.79 1.856.79 2.478 0l2.908-3.692a1.44 1.44 0 0 0 .135-1.6 1.55 1.55 0 0 0-1.374-.795h-5.817c-.604 0-1.114.323-1.374.795a1.44 1.44 0 0 0 .135 1.6zm1.239-.908c-.043 0-.059-.017-.061-.02l-2.88-3.656.032-.003h5.817q.02 0 .032.003l-2.88 3.656c-.002.003-.018.02-.06.02M15.548 4.19c.62-.79 1.856-.79 2.478 0l2.908 3.692c.393.5.398 1.122.135 1.6-.26.473-.77.796-1.374.796h-5.817a1.55 1.55 0 0 1-1.374-.795 1.44 1.44 0 0 1 .135-1.6zm1.239.908c-.043 0-.059.017-.061.02l-2.88 3.656.032.004h5.817l.032-.004-2.88-3.656c-.002-.003-.018-.02-.06-.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDirectionUpDownOutline;
