import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFactomLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.919 17.752-.376.203c-2.628 1.348-5.103 1.986-6.309 1.705M20.044 9.299c-.109 1.502-2.749 4.03-6.463 6.008l-.218.113M8.866 17.23c-1.686.455-3.06.526-3.811.15M20.189 13.34c-.375.864-1.502 2.005-3.12 3.113M18.937 17.584c-.424.676-1.502 1.555-2.872 2.29-1.296.692-2.543 1.09-3.35 1.127M16.001 4.314c.594 1.127-1.836 3.568-5.422 5.487-.376.207-.774.398-1.153.575M18.63 6.094c.706 1.322-2.197 4.243-6.478 6.534s-8.344 3.072-9.05 1.754M6.042 11.585c-1.566.375-2.719.277-3.042-.327M9.678 6.598q-.31.18-.642.376c-2.366 1.265-4.6 1.697-4.991.969-.39-.729 1.213-2.343 3.582-3.609 2.37-1.266 4.62-1.712 4.995-.984.188.353-.094.916-.702 1.547"
    />
  </Svg>
);
export default IconlystFactomLight;
