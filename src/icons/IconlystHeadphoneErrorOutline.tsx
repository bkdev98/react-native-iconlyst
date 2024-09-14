import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneErrorOutline = ({
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
      d="M12.25 13.108a.75.75 0 0 1-.75-.75V9.266a.75.75 0 1 1 1.5 0v3.092a.75.75 0 0 1-.75.75M12.25 15.512a.745.745 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M7.05 20.827a2.65 2.65 0 0 1-2.273-1.297 14.8 14.8 0 0 1-1.85-3.744 2.145 2.145 0 0 1 1-2.492l.226-.129a2.637 2.637 0 0 1 3.593.967l1.583 2.744a2.638 2.638 0 0 1-2.278 3.951zm-1.589-6.51c-.197-.001-.391.05-.563.15l-.226.128a.66.66 0 0 0-.313.748 13.3 13.3 0 0 0 1.705 3.416 1.133 1.133 0 0 0 1.964-1.133l-1.583-2.744a1.14 1.14 0 0 0-.98-.566zM17.45 20.828a2.635 2.635 0 0 1-2.277-3.95l1.581-2.745a2.64 2.64 0 0 1 3.6-.965l.221.126a2.144 2.144 0 0 1 1 2.494 14.8 14.8 0 0 1-1.849 3.743c-.35.596-.92 1.03-1.588 1.206q-.338.09-.689.091m1.588-6.51a1.13 1.13 0 0 0-.984.565l-1.582 2.744a1.135 1.135 0 0 0 .834 1.69 1.13 1.13 0 0 0 1.13-.558l.024-.04a13.3 13.3 0 0 0 1.678-3.374.66.66 0 0 0-.316-.75l-.219-.127a1.13 1.13 0 0 0-.563-.15z"
    />
    <Path
      fill={props.color}
      d="M20.477 17.323a.75.75 0 0 1-.685-1.056 8.25 8.25 0 1 0-15.254-.41.75.75 0 1 1-1.4.536 9.6 9.6 0 0 1-.638-3.469 9.75 9.75 0 1 1 18.662 3.953.75.75 0 0 1-.685.446"
    />
  </Svg>
);
export default IconlystHeadphoneErrorOutline;
