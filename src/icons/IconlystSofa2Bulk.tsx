import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa2Bulk = ({
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
      d="M21.413 11.37a2 2 0 0 0-1.366-1.388c-.274-.08-.559-.08-1.123-.08-.55 0-.826 0-1.096.079a2.02 2.02 0 0 0-1.372 1.368c-.078.276-.078.549-.078 1.094v.91c0 .303-.248.55-.555.55H8.185a.55.55 0 0 1-.553-.55v-.9c0-.568 0-.853-.084-1.136a1.98 1.98 0 0 0-1.329-1.33c-.287-.094-.577-.094-1.15-.094-.55 0-.853 0-1.125.089a2 2 0 0 0-1.348 1.36c-.084.286-.08.582-.072 1.117.017 1.343.043 2.208.077 2.567.176 2.028 1.78 3.607 3.771 3.75.205.033.541.057.96.076v1.4a.75.75 0 0 0 1.5 0v-1.36c.965.017 2.077.02 3.163.02.03 0 1.876-.001 3.45-.03v1.37a.75.75 0 0 0 1.5 0v-1.415c.31-.015.543-.033.645-.055a4.1 4.1 0 0 0 3.8-3.75c.034-.354.063-1.213.084-2.55.01-.536.015-.831-.061-1.111"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.531 9.038c.92.27 1.68 1.01 1.97 1.99.13.43.13.8.13 1.42v.15a.3.3 0 0 0 .3.3h6.15a.3.3 0 0 0 .3-.3v-.16c0-.59 0-.95.11-1.36.3-1.01 1.07-1.78 2.06-2.06.4-.12.77-.12 1.37-.12h.221a.315.315 0 0 0 .32-.31v-.65c0-1.4 0-2.1-.24-2.72-.36-.9-1.08-1.61-1.96-1.96-.63-.26-1.33-.26-2.74-.26h-4.98c-1.4 0-2.11 0-2.72.26-.9.35-1.61 1.06-1.97 1.96-.25.62-.25 1.32-.25 2.72v.638c0 .174.147.313.321.312h.148c.61 0 1.02 0 1.46.15"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSofa2Bulk;
