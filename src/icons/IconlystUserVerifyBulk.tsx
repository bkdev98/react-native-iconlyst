import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserVerifyBulk = ({
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
      d="M9.767 2.977a4.88 4.88 0 0 0-4.875 4.875 4.88 4.88 0 0 0 4.875 4.876 4.88 4.88 0 0 0 4.875-4.876 4.88 4.88 0 0 0-4.875-4.875M14.82 12.996A1.103 1.103 0 0 0 13.72 14.1v.5c0 .291-.118.571-.323.777l-.345.351-.01.004v.002c-.43.432-.42 1.13.01 1.558l.345.351c.205.207.323.485.323.776v.505c0 .608.495 1.102 1.098 1.102h.506a1.1 1.1 0 0 1 .776.321l.355.35v.006a1.107 1.107 0 0 0 1.562-.007l.344-.35c.216-.206.495-.322.786-.322h.496a1.103 1.103 0 0 0 1.11-1.1v-.504c0-.29.106-.569.322-.776l.344-.35.011-.005c.42-.433.42-1.13-.01-1.56l-.345-.35a1.06 1.06 0 0 1-.323-.778v-.5c0-.61-.496-1.104-1.109-1.104h-.496c-.29 0-.57-.116-.775-.32l-.355-.352v-.003h-.01a1.093 1.093 0 0 0-1.552.003l-.355.352c-.205.205-.485.32-.776.32zm1.413 5.023a.747.747 0 0 0 1.06-.001l1.89-1.897a.751.751 0 0 0-1.062-1.06l-1.36 1.366-.39-.39a.75.75 0 1 0-1.06 1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.766 14.246c-4.98 0-7.21 2.75-7.21 5.48a.75.75 0 0 0 .75.75l5.81-.009 1.177-.002q.157-.005.305-.054c.425-.12.7-.469.7-.964v-4.183c0-.612-.444-1.018-1.532-1.018"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserVerifyBulk;
