import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettlebell1Bold = ({
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
      d="M13.725 12.473a.73.73 0 0 0-.73.73v2.04c0 .402.328.73.73.73s.73-.328.73-.73v-2.04a.73.73 0 0 0-.73-.73"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.955 15.243c0 1.229-1 2.23-2.23 2.23a2.233 2.233 0 0 1-2.23-2.23v-2.04c0-1.23 1-2.23 2.23-2.23s2.23 1 2.23 2.23zm-5.405 1.389a.75.75 0 0 1-1.5 0v-3.25a.75.75 0 0 1-.741-1.276l1.002-.86a.752.752 0 0 1 1.239.57zM8.409 5.45c.155-.482.505-.822 1.108-1.057 1.517-.682 3.466-.683 5.007.017.565.218.915.558 1.07 1.039.227.699.008 1.592-.238 2.16a7.44 7.44 0 0 0-6.71 0c-.245-.568-.463-1.46-.237-2.16m8.834 3.524a8 8 0 0 0-.613-.544c.423-.848.785-2.225.392-3.442-.295-.913-.971-1.597-1.917-1.961-1.905-.866-4.283-.866-6.167-.017-.985.38-1.662 1.066-1.957 1.979-.392 1.216-.031 2.592.39 3.44a7 7 0 0 0-.613.545c-2.89 2.89-2.89 7.594 0 10.484A7.4 7.4 0 0 0 12 21.625a7.4 7.4 0 0 0 5.243-2.167c2.889-2.89 2.889-7.593 0-10.484"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKettlebell1Bold;
