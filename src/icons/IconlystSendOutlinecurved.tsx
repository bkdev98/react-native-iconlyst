import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendOutlinecurved = ({
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
      d="M13.464 4.877c-3.672 1.011-7.495 2.369-9.16 3.33-.399.23-.486.384-.502.417a.55.55 0 0 0 .137.196c.186.196.512.427.982.674.46.243 1.015.479 1.615.702 1.202.447 2.54.824 3.586 1.09a50 50 0 0 0 1.646.39l.096.021.024.005.007.002a.75.75 0 0 1 .583.582l.001.007.005.024.02.096.082.366c.071.314.176.759.309 1.28.266 1.046.644 2.385 1.09 3.586.224.6.46 1.154.702 1.615.248.47.478.797.675.982.107.101.17.13.195.137.034-.015.187-.103.417-.501.961-1.666 2.32-5.488 3.33-9.16.502-1.824.91-3.577 1.136-4.969.113-.697.177-1.285.19-1.738q.006-.27-.01-.45-.18-.016-.45-.009c-.452.012-1.04.076-1.738.19-1.391.226-3.144.633-4.968 1.135m2.107 15.504h-.01zm-4.458-7.313-.042-.01a51 51 0 0 1-1.32-.318c-1.069-.273-2.465-.665-3.737-1.138a16 16 0 0 1-1.791-.78c-.527-.278-1.023-.6-1.375-.973-.351-.373-.663-.916-.508-1.565.143-.602.635-1.042 1.213-1.376C5.4 5.843 9.385 4.444 13.066 3.431c1.852-.51 3.662-.932 5.126-1.17.73-.118 1.392-.194 1.939-.209.273-.007.533.001.766.031.224.029.471.084.691.2a.75.75 0 0 1 .31.31c.117.22.172.468.2.692.03.233.038.492.03.765-.014.547-.09 1.21-.208 1.94-.238 1.463-.66 3.273-1.17 5.126-1.013 3.68-2.411 7.666-3.477 9.512-.334.578-.773 1.07-1.376 1.214-.649.154-1.192-.158-1.564-.509-.374-.352-.696-.848-.973-1.374a16 16 0 0 1-.78-1.791c-.474-1.273-.866-2.669-1.139-3.738a51 51 0 0 1-.328-1.362M3.8 8.61v.01z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.766 2.415a.75.75 0 0 1 0 1.061l-9.492 9.493a.75.75 0 0 1-1.061-1.061l9.492-9.493a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSendOutlinecurved;
