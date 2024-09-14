import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPizzaBulk = ({
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
      d="m2.291 7.146 7.817 13.622c.824 1.434 2.893 1.438 3.72.006l7.876-13.623c.826-1.426.087-3.225-1.486-3.716Q12 .87 3.781 3.438c-1.57.49-2.308 2.282-1.49 3.708"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.131 7.589c-.078.03-.148.06-.23.095a.75.75 0 1 1-.59-1.38l.004-.001a8 8 0 0 1 .326-.132c5.576-1.858 11.154-1.858 16.719 0l.032.012q.152.06.27.11l.024.01a.75.75 0 1 1-.583 1.382l-.024-.01c-.075-.032-.14-.059-.211-.087-5.246-1.748-10.48-1.748-15.737 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.33 8.719a.547.547 0 1 0 0 1.094.547.547 0 0 0 0-1.094m-2.048.547a2.047 2.047 0 1 1 4.095 0 2.047 2.047 0 0 1-4.095 0M15.052 13.322a1.966 1.966 0 0 0-.657 3.825.75.75 0 0 1-.503 1.413 3.466 3.466 0 0 1 1.16-6.738c.862 0 1.658.316 2.259.833a.75.75 0 1 1-.979 1.137 1.96 1.96 0 0 0-1.28-.47M5.844 10.92a3.06 3.06 0 0 1 1.43-.348 3.18 3.18 0 0 1 3.172 3.173c0 1.114-.57 2.09-1.435 2.657a.75.75 0 0 1-.822-1.255c.46-.3.757-.813.757-1.402 0-.92-.753-1.673-1.672-1.673a1.56 1.56 0 0 0-.73.176.75.75 0 0 1-.7-1.328M16.01 7.783a.75.75 0 0 1 .796.701l.108 1.713a.75.75 0 0 1-1.497.094l-.108-1.713a.75.75 0 0 1 .701-.795M6.445 8.346a.75.75 0 0 1 .912-.541l1.455.37a.75.75 0 0 1-.37 1.454l-1.455-.37a.75.75 0 0 1-.542-.913"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPizzaBulk;
