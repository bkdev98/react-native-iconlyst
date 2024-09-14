import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesEditOutline = ({
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
      d="m13.84 10.024-3.62 3.964c-.171.195-.28.44-.308.699l-.092.86a.184.184 0 0 0 .21.204l.832-.14c.279-.047.534-.188.722-.4l.006-.006 3.586-3.927.004-.004a.4.4 0 0 0-.023-.56l-.764-.71a.39.39 0 0 0-.553.02m-1.103-1.017a1.89 1.89 0 0 1 2.676-.104l.766.712c.764.71.813 1.908.104 2.676L12.7 16.213a2.74 2.74 0 0 1-1.59.877l-.832.14a1.684 1.684 0 0 1-1.95-1.843l.092-.862v-.002a2.77 2.77 0 0 1 .68-1.534l.008-.008z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.521 22.606a9.7 9.7 0 0 1-4.07-.893 3.3 3.3 0 0 0-.981-.3 3.8 3.8 0 0 0-1.051.267c-.765.261-1.812.624-2.569-.136s-.412-1.758-.138-2.563c.139-.343.228-.703.265-1.071a3.1 3.1 0 0 0-.3-1 9.84 9.84 0 0 1 1.969-11 9.67 9.67 0 0 1 6.9-2.863 9.67 9.67 0 0 1 6.893 2.863 9.777 9.777 0 0 1-6.918 16.696m-5.054-2.69a4.2 4.2 0 0 1 1.562.413l.036.015a8.274 8.274 0 0 0 9.31-13.37 8.18 8.18 0 0 0-5.832-2.422 8.18 8.18 0 0 0-5.834 2.422 8.34 8.34 0 0 0-1.653 9.346c.24.5.384 1.04.421 1.593a5 5 0 0 1-.345 1.554c-.094.277-.315.926-.22 1.02.095.096.742-.128 1.018-.223a5 5 0 0 1 1.537-.347z"
    />
  </Svg>
);
export default IconlystMessagesEditOutline;
