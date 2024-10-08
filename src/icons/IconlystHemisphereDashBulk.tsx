import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereDashBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M20.664 18.975a10.84 10.84 0 0 1-7.449 2.928c-2.93 0-5.69-1.14-7.76-3.22-4.2-4.2-4.27-11.01-.19-15.3l.137-.125c-.568.589-.768 1.387-.746 2.211.024.838.276 1.775.69 2.742.83 1.938 2.375 4.144 4.42 6.19 2.046 2.045 4.253 3.59 6.191 4.42.967.415 1.904.667 2.741.69.715.02 1.41-.127 1.966-.536"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m6.494 4.286.018-.02c.229-.214.63-.36 1.294-.308a.75.75 0 0 0 .118-1.496c-.93-.073-1.842.114-2.492.763l-.03.032c-.568.59-.768 1.387-.746 2.212.024.838.276 1.774.69 2.741.83 1.938 2.375 4.145 4.42 6.19s4.253 3.591 6.191 4.422c.967.414 1.904.666 2.741.69.825.022 1.623-.178 2.212-.745l.032-.031c.65-.65.836-1.562.763-2.492a.75.75 0 1 0-1.495.118c.052.665-.095 1.065-.31 1.294l-.018.018c-.207.207-.56.354-1.142.338-.585-.016-1.329-.2-2.192-.57-1.723-.738-3.776-2.158-5.72-4.103-1.946-1.944-3.365-3.997-4.103-5.72-.37-.863-.553-1.607-.57-2.192-.015-.582.133-.935.339-1.141"
    />
    <Path
      fill={props.color}
      d="M20.288 13.875a.75.75 0 0 1-1.011-.322c-.599-1.157-1.467-2.422-2.563-3.683a.75.75 0 1 1 1.131-.984c1.162 1.335 2.102 2.698 2.764 3.978a.75.75 0 0 1-.322 1.01M14.24 7.405a.75.75 0 0 0 .98-1.135c-1.267-1.096-2.558-1.99-3.778-2.638a.75.75 0 0 0-.703 1.325c1.106.587 2.305 1.414 3.5 2.448"
    />
  </Svg>
);
export default IconlystHemisphereDashBulk;
