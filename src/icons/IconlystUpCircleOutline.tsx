import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpCircleOutline = ({
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
      d="M2.25 12c0 5.384 4.365 9.75 9.75 9.75s9.75-4.366 9.75-9.75S17.385 2.25 12 2.25 2.25 6.616 2.25 12M12 20.25a8.25 8.25 0 1 1 0-16.5 8.25 8.25 0 0 1 0 16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.609 9.062c.846.935 1.905 2.585 2.422 3.867l.019.054c.191.603.217 1.263-.17 1.816-.373.53-.994.768-1.628.866l-.032.005c-.717.08-1.46.118-2.219.115a19 19 0 0 1-2.255-.12c-.629-.102-1.249-.339-1.622-.865-.392-.553-.367-1.214-.17-1.822l.018-.049c.517-1.282 1.576-2.932 2.421-3.867.418-.474.954-.847 1.608-.847s1.19.373 1.608.847M12 9.715c-.042 0-.204.022-.485.342l-.007.008c-.727.803-1.682 2.289-2.135 3.4-.109.349-.037.452-.026.468.03.042.164.172.62.248.65.072 1.33.107 2.03.104h.006a18 18 0 0 0 2.033-.104c.456-.073.586-.203.614-.244.013-.017.083-.124-.023-.475-.453-1.11-1.408-2.595-2.135-3.397l-.007-.008c-.28-.32-.442-.342-.485-.342"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpCircleOutline;
