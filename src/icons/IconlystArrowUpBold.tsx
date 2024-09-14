import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="m12.36 13.163-.353.002c-1.472 0-2.814-.086-3.688-.216l-.544-.114c-.288-.063-.616-.146-.784-.233A1.82 1.82 0 0 1 6 11v-.058c.014-.433.394-1.343.408-1.343.614-1.464 2.468-4.289 3.79-5.593l.396-.38c.108-.098.235-.21.334-.28A1.77 1.77 0 0 1 11.992 3c.423 0 .817.13 1.138.375l.42.39.09.087c1.283 1.184 3.382 4.274 4.024 5.89l.094.245c.105.294.23.705.242.955a2 2 0 0 1-.22.91c-.203.36-.525.649-.904.808-.262.101-1.05.26-1.064.26-.794.147-2.047.231-3.451.243M12 21a1.51 1.51 0 0 1-1.518-1.503l.327-3.7c0-.65.533-1.179 1.19-1.179.66 0 1.191.528 1.191 1.18l.327 3.699c0 .83-.68 1.503-1.517 1.503"
    />
  </Svg>
);
export default IconlystArrowUpBold;
