import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessLockPasswordBold = ({
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
      fillRule="evenodd"
      d="M14.212 13.73c.139-.17.235-.372.278-.587.37-1.855 1.94-3.22 3.875-3.244a4.17 4.17 0 0 1 2.12.6c.132.08.305.059.405-.06l.032-.038a1.963 1.963 0 0 0-.126-2.645c-5.168-5.113-12.669-5.115-17.836 0a1.96 1.96 0 0 0-.128 2.644l7.56 8.988c.37.44.91.691 1.485.691.574 0 1.115-.252 1.484-.69.19-.227.23-.54.149-.823a3.7 3.7 0 0 1-.144-1.029V16.1c0-.898.319-1.722.846-2.37"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.217 17.538a.52.52 0 0 1-.52.52h-2.56a.52.52 0 0 1-.52-.52V16.1c0-.287.232-.521.52-.521h2.56c.286 0 .52.234.52.52zm-1.81-4.39h.011c.424 0 .772.344.777.76v.172H17.64v-.166a.775.775 0 0 1 .768-.765m2.288 1.207v-.457a2.28 2.28 0 0 0-2.276-2.25h-.03a2.27 2.27 0 0 0-2.25 2.253v.453a2.01 2.01 0 0 0-1.023 1.747v1.437c0 1.114.906 2.02 2.02 2.02h2.56a2.024 2.024 0 0 0 2.021-2.02V16.1c0-.75-.415-1.397-1.022-1.746"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessLockPasswordBold;
