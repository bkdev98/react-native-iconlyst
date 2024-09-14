import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdaCardanoBold = ({
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
      d="M17.314 13.575c-.847 0-1.535.69-1.535 1.54 0 .844.688 1.53 1.535 1.53.846 0 1.534-.686 1.534-1.53 0-.85-.688-1.54-1.534-1.54M15.78 8.565a1.533 1.533 0 0 0 3.069 0c0-.85-.689-1.54-1.535-1.54-.847 0-1.535.69-1.535 1.54M8.286 15.115c0-.85-.688-1.54-1.534-1.54s-1.535.69-1.535 1.54c0 .844.688 1.53 1.535 1.53.846 0 1.534-.686 1.534-1.53M6.752 10.095a1.534 1.534 0 1 0 0-3.068 1.534 1.534 0 0 0 0 3.068M4.078 10.305a1.534 1.534 0 1 0-.001 3.068 1.534 1.534 0 0 0 .001-3.068M19.988 10.305a1.534 1.534 0 1 0-.001 3.068 1.534 1.534 0 0 0 .001-3.068M12.033 16.115a1.534 1.534 0 1 0-.001 3.071 1.534 1.534 0 0 0 .001-3.071M8.09 16.855a1.534 1.534 0 1 0-.002 3.068 1.534 1.534 0 0 0 .002-3.068M15.978 16.855a1.534 1.534 0 1 0-.001 3.068 1.534 1.534 0 0 0 .001-3.068M8.09 6.825c.846 0 1.534-.691 1.534-1.54 0-.844-.688-1.53-1.534-1.53s-1.535.686-1.535 1.53c0 .849.688 1.54 1.535 1.54M15.978 6.825c.846 0 1.534-.691 1.534-1.54 0-.844-.688-1.53-1.534-1.53s-1.535.686-1.535 1.53c0 .849.688 1.54 1.535 1.54M12.033 7.895c.847 0 1.535-.691 1.535-1.54 0-.844-.688-1.53-1.535-1.53s-1.535.686-1.535 1.53c0 .849.688 1.54 1.535 1.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.427 11.975c0-.428-.166-.815-.432-1.11.098.017.198.03.3.03.77 0 1.413-.524 1.605-1.23.192.706.835 1.23 1.604 1.23.133 0 .26-.02.385-.05a1.643 1.643 0 0 0 .098 2.348 1.7 1.7 0 0 0-.483-.078c-.77 0-1.412.524-1.604 1.23a1.665 1.665 0 0 0-1.605-1.23q-.192.002-.372.045c.31-.301.504-.721.504-1.185m1.473 3.232a1.67 1.67 0 0 0 1.604 1.238c.92 0 1.669-.75 1.669-1.67 0-.484-.213-.916-.546-1.22.154.047.314.08.484.08.92 0 1.668-.744 1.668-1.66a1.67 1.67 0 0 0-1.668-1.67c-.132 0-.26.019-.382.048.273-.295.444-.686.444-1.118 0-.921-.75-1.67-1.67-1.67-.768 0-1.411.527-1.603 1.237a1.67 1.67 0 0 0-1.605-1.237 1.67 1.67 0 0 0-1.668 1.67c0 .423.165.807.429 1.1a2 2 0 0 0-.298-.03 1.67 1.67 0 0 0-1.668 1.67 1.665 1.665 0 0 0 2.04 1.615c-.31.3-.503.72-.503 1.185 0 .92.748 1.67 1.668 1.67.77 0 1.413-.527 1.605-1.238M11.913 20c-.553 0-1 .453-1 1.005a1 1 0 1 0 2 0v-.01a.995.995 0 0 0-1-.995M20.423 15.805a.99.99 0 0 0-1.41-.03 1.005 1.005 0 0 0 .695 1.73 1 1 0 0 0 .725-1.69zM3.394 15.816a1 1 0 1 0 1.45 1.379l.01-.01a.994.994 0 0 0-.04-1.41 1.005 1.005 0 0 0-1.42.04M19.698 8.515a1 1 0 0 0 .707-.293l.01-.01a.994.994 0 0 0-.005-1.41 1.005 1.005 0 0 0-1.419.006.999.999 0 0 0 .707 1.707M4.129 8.515a.999.999 0 0 0 .707-1.707l-.01-.01a.994.994 0 0 0-1.41.005 1.005 1.005 0 0 0 .713 1.712M11.913 4.015a1 1 0 0 0 1-1v-.01a.995.995 0 0 0-1-.995c-.553 0-1 .453-1 1.005a1 1 0 0 0 1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdaCardanoBold;
