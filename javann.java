package semana05;

import java.util.Arrays;
import weka.core.Instance;
import weka.core.Instances;
import weka.core.converters.ConverterUtils.DataSource;

public class LendoExemplos {
    public static void main(String[] args) throws Exception {
      DataSource arff = new DataSource("iris.arff");
      Instances iris = arff.getDataSet();
      iris.setClassIndex(4);
      
      System.out.println(iris);
      
      
      
      int qtdeExemplos = iris.numInstances();
      int qtdeAtributos = iris.numAttributes();
      double[][] matrizIris = new double[qtdeExemplos][qtdeAtributos];
      for(int i=1; i<qtdeExemplos; i++){
          matrizIris[i-1] = iris.get(i).toDoubleArray();
          System.out.println("Exemplos da base");
          System.out.println(Arrays.toString(matrizIris[i-1]));
      }
      Instance primeiro = iris.get(0);
      double[] vetorTeste = {5.1, 3.5, 2.8, 5.0, -1};
      System.out.println("Exemplo teste: ");
      System.out.println(Arrays.toString(vetorTeste));
      
      double classe = nn(matrizIris, vetorTeste);
      System.out.println("CLasse encontrada: " + classe);
      
    }
    
    public static double getEuclidiana(double[] vet1, double[] vet2){
        double dist = 0;
        for(int i = 0; i < vet1.length; i++){
            dist += Math.pow(vet1[i] - vet2[i],2);
        }
        dist = Math.sqrt(dist);
        return dist;
    }
    
    public static double nn(double[][] conjunto, double[] exemplo){
        double menor = -1;
        int vizinho = -1;
        for(int i=0; i<conjunto.length -1; i++){
            double dist = getEuclidiana(conjunto[i], exemplo);
            if(dist < menor || vizinho == -1){
                menor = dist;
                vizinho = i;
            }
        }
        int classIndex = exemplo.length -1;
        return conjunto[vizinho][classIndex];
    }
        
    
    
}
